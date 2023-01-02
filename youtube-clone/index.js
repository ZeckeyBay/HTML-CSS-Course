const search = () => {
    const searchBox = document.getElementById('search-bar').value.toLowerCase();
    const storeItems = document.getElementById('video-grid')
    const videoinfo = storeItems.querySelectorAll('.video-info')
    const vname = document.getElementsByClassName('video-title')
    const vpreview = document.getElementsByClassName('video-preview')
    
    for(let i=0;i< vname.length; i++){
        let match = videoinfo[i].getElementsByClassName('video-title')[0];
        if(match){
            let videovalue = match.textContent || match.innerHTML
            if(videovalue.toLowerCase().indexOf(searchBox)>-1){
                vpreview[i].style.display = ''
            } else {
                vpreview[i].style.display = 'none'
            }
        }
    }
}