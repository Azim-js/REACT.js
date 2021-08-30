import React, { useState , useRef } from 'react'
import { Alert, Button, Modal } from 'rsuite';
import AvatarEditor from 'react-avatar-editor'; 
import { useModalState } from '../../misc/custom-hooks';
import { database, storage } from '../../misc/firebase';
import { useProfile } from '../../context/profile.context';

const fileInputTypes='.png, .jpeg, .jpg';
const acceptedFileTypes=['image/png','image/jpeg','image/pjpeg'];
const isValidFile=(file)=>acceptedFileTypes.includes(file.type);

const getBlob=(canvas)=>{
    return new Promise((resolve,reject)=>{
        canvas.toBlob((blob)=>{
            if(blob){
                resolve(blob);
            }else{
                reject(new Error('File process error')); 
            }
        })
    })
}

const AvatarUploadBtn = () => {
    const {isOpen,open,close}=useModalState();
    const {profile}=useProfile();

    const [isLoading,setIsLoading]=useState(false);

    // new state for seting images

    const [img,setImg]=useState(null);
    
    const avatarEditorRef=useRef(); // for refrenceing the modal (Canvas) for pic 

    const onFileInputChange=(ev)=>{

        const currFiles=ev.target.files;
        
        if(currFiles.length===1){
            const file=currFiles[0];

            if(isValidFile(file)){

                setImg(file);

                open();
                
            }else{
                Alert.warning(`Wrong FIle type ${file.type}`,4000)
            }
        }
    }

    const onUploadClick =async ()=>{

        
        const canvas = avatarEditorRef.current.getImageScaledToCanvas();
        setIsLoading(true)

        // now easily canvas can be renderd (binary format)
        // callback uproach
        try{
           const blob=await getBlob(canvas);

            const avatarFileRef = storage.ref(`/profile/${profile.uid}`).child('avatar');

            const uploadAvatarResult=await avatarFileRef.put(blob,{
                cacheControl:`public,max-age=${3600*24*3}` // max 3 days of storage 1hr in sec * 24 hr in day * 3 

            });
            const downloadUrl =await uploadAvatarResult.ref.getDownloadURL();
            const userAvatarRef = database.ref(`/profiles/${profile.uid}`).child('avatar');
            
            userAvatarRef.set(downloadUrl);
            Alert.info('Avatar has been uploaded ',4000);
            setIsLoading(false)

        } catch(err){
            setIsLoading(false);
                Alert.error(err.message,4000);
                
        }
    }

    return (
        <div className="mt-3 text-center">
            <div>
                <label htmlFor="avatar-upload" className="d-block" >
                    Select new Avatar
                    <input id="avatar-upload" type="file" className="d-none" accept={fileInputTypes} onChange={onFileInputChange} disabled={isLoading}/>
                </label>
                <Modal show={isOpen} onHide={close}>
                    <Modal.Header>
                        <Modal.Title>
                            Adjust and upload new avatar
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex justify-content-center algin-item-center h-100">
                            {img &&
                            (<AvatarEditor 
                                ref={avatarEditorRef}
                                image={img}
                                width={200}
                                height={200}
                                border={10}
                                color={[255, 255, 255, 0.6]} // RGBA
                                borderRadius={100}
                                scale={1.2}
                                rotate={0}
                                />)
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  block appearance="ghost" onClick={onUploadClick}>
                            Upload new Avatar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default AvatarUploadBtn
