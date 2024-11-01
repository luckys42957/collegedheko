tinymce.init({
    selector:"textarea#default",
    maxWidth:1000,
    minHeight:300,
    plugins:[
        'advlist', 'autolink' ,'link' ,'image' , 'lists' ,'charmap' ,'preview' , 'anchor' , 'pagebreak', 'searchreplace' ,
        'wordcount','visualblocks' , 'code' , 'fullscreen' , 'insertdatetime' ,'media' , 'tabel' , 'emoticons' , 'template' , 'codesample'
    ],

    toolbar: 'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify' + 'bulllist numlist outdent indent | link image | print preview media fullscreen' + 'forecolor backcolor emoticons'

    ,

    menu:{
        favs:{title:'Menu' , items:'code visualaid | searchreplace | emoticons'}
    },

    menubar: ' favs file edit view  insert format tool tabel',
    

   

    
})