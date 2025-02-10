document.querySelector('.analyze-btn').addEventListener('click', () => {
    const fileInput = document.getElementById('csv-upload');
    if (fileInput.files.length === 0) {
        alert('Please upload a CSV file first!');
    } else {
        const file = fileInput.files[0];
        if (file.type === 'text/csv') {
            alert(`File "${file.name}" uploaded successfully!`);
            // Add file processing logic here
        } else {
            alert('Invalid file type. Please upload a .csv file.');
        }
    }
});

