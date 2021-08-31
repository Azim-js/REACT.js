export function getNameInitials(name){

    const splitName=name.toUpperCase().split(' ');
    // eslint-disable-next-line no-console
    console.log(splitName);
    if(splitName.length>1){
        return splitName[0][0]+splitName[1][0];
    }
    return splitName[0][0]
}