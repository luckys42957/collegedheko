document.addEventListener("DOMContentLoaded", () => {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    const notification = document.getElementById('notification');

    const showNotification = (message) => {
        notification.textContent = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    };

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.backgroundColor = "#e3f2fd";
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.style.backgroundColor = "#fff";
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.backgroundColor = "#fff";
        handleFiles(e.dataTransfer.files);
    });

    uploadArea.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => handleFiles(fileInput.files));

    const handleFiles = (files) => {
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                compressImage(file, (compressedFile) => {
                    displayFile(compressedFile);
                });
            } else {
                displayFile(file);
            }
        });
    };

    const compressImage = (file, callback) => {
        new Compressor(file, {
            quality: 0.6,
            success(result) {
                callback(result);
            },
            error(err) {
                console.log(err.message);
            },
        });
    };

    const displayFile = (file) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';

        const fileDetails = document.createElement('div');
        fileDetails.className = 'file-details';

        const fileName = document.createElement('span');
        fileName.textContent = `Name: ${file.name}`;
        const fileSize = document.createElement('span');
        fileSize.textContent = `Size: ${(file.size / 1024).toFixed(2)} KB`;
        const fileType = document.createElement('span');
        fileType.textContent = `Type: ${file.type}`;

        fileDetails.appendChild(fileName);
        fileDetails.appendChild(fileSize);
        fileDetails.appendChild(fileType);

        const fileActions = document.createElement('div');
        fileActions.className = 'file-actions';

        const uploadBtn = document.createElement('button');
        uploadBtn.innerHTML = '<i class="fas fa-upload"></i>';
        uploadBtn.addEventListener('click', () => uploadFile(file, fileItem));

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', () => fileItem.remove());

        fileActions.appendChild(uploadBtn);
        fileActions.appendChild(deleteBtn);

        fileItem.appendChild(fileDetails);
        fileItem.appendChild(fileActions);
        fileList.appendChild(fileItem);

        if (file.type.startsWith('image/')) {
            const thumbnail = document.createElement('img');
            thumbnail.src = URL.createObjectURL(file);
            fileItem.insertBefore(thumbnail, fileDetails);
        } else if (file.type.startsWith('video/')) {
            const videoPreview = document.createElement('video');
            videoPreview.src = URL.createObjectURL(file);
            videoPreview.controls = true;
            videoPreview.width = 100;
            fileItem.insertBefore(videoPreview, fileDetails);
        } else if (file.type.startsWith('audio/')) {
            const audioPreview = document.createElement('audio');
            audioPreview.src = URL.createObjectURL(file);
            audioPreview.controls = true;
            fileItem.insertBefore(audioPreview, fileDetails);
        } else if (file.type === 'application/pdf') {
            const pdfPreview = document.createElement('embed');
            pdfPreview.src = URL.createObjectURL(file);
            pdfPreview.type = 'application/pdf';
            pdfPreview.width = 100;
            pdfPreview.height = 100;
            fileItem.insertBefore(pdfPreview, fileDetails);
        } else if (file.type.startsWith('text/')) {
            const textPreview = document.createElement('p');
            const reader = new FileReader();
            reader.onload = (e) => textPreview.textContent = e.target.result;
            reader.readAsText(file);
            fileItem.insertBefore(textPreview, fileDetails);
        } else if (file.type === 'application/x-font-ttf' || file.type === 'application/x-font-otf' || file.type === 'font/ttf' || file.type === 'font/otf') {
            const fontPreview = document.createElement('p');
            fontPreview.style.fontFamily = 'LipsumFont';
            fontPreview.textContent = 'Lipsum';
            const fontFace = new FontFace('LipsumFont', `url(${URL.createObjectURL(file)})`);
            fontFace.load().then((loadedFace) => {
                document.fonts.add(loadedFace);
                fontPreview.style.fontFamily = loadedFace.family;
            });
            fileItem.insertBefore(fontPreview, fileDetails);
        }
    };

    const uploadFile = (file, fileItem) => {
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        fileItem.appendChild(progressBar);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'upload_endpoint', true);
        xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) {
                const percentComplete = (e.loaded / e.total) * 100;
                progressBar.style.width = `${percentComplete}%`;
            }
        };

        xhr.onload = () => {
            if (xhr.status == 200) {
                showNotification('Fichier uploadé avec succès');
                progressBar.style.backgroundColor = '#28a745';
            } else {
                showNotification('Échec de l\'upload');
                progressBar.style.backgroundColor = '#dc3545';
            }
        };

        const formData = new FormData();
        formData.append('file', file);
        xhr.send(formData);
    };

    uploadArea.addEventListener('dblclick', (e) => {
        e.preventDefault();
        fileInput.click();
    });

    fileInput.addEventListener('dblclick', (e) => {
        e.stopPropagation();
    });
});