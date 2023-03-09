let index = 0;
changeColors= ()=> {
    let colors = ['red','orange','blue','indigo','green'];
    document.getElementsByTagName( 'body' )[0].style.background = colors[index++];

    if( index > colors.length -1){
        index = 0;
    }
}