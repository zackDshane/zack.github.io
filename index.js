document.querySelectorAll('.btnDetail').forEach(item =>{
    item.addEventListener('click',(e) => {
        let parent = e.target.closest('.card')
        let gambar =parent.querySelector('.card-img-top').src
        let harga =parent.querySelector('.harga').innerHTML
        let judul =parent.querySelector('.card-text').innerHTML
        let deksripsi =parent.querySelector('.deksripsi')? 
        parent.querySelector('.deksripsi').innerHTML : '<i> maaf data yang anda cari tidak tersedia<1/>'
        


        let tombolModal = document.querySelector('.btnModal')
        tombolModal.click()



        document.querySelector('.modalTitle').innerHTML = judul
        let image = document.createElement('img')
        image.src = gambar
        image.classList.add('w-100')
        document.querySelector('.modalImages').innerHTML =''
        document.querySelector('.modalImages').appendChild(image)
        document.querySelector('.modalDeksripsi').innerHTML = deksripsi
        document.querySelector('.modalHarga').innerHTML = harga

        const nohp ='6281520378635'
        let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text= Halo Kak , Saya Ingin Order Product ini ${gambar}`


        document.querySelector('.btnBeli').href = pesan
    })
})



