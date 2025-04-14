document.addEventListener('DOMContentLoaded', function() {
    const resumeBtn = document.querySelector('#resume-btn');
    
    resumeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Open the resume in a new tab
        window.open('https://drive.google.com/file/d/1Dldwm6GECabembD3GgDzqSNu9h6IW9jN/view?usp=sharing', '_blank');
        
        // Trigger download
        const downloadLink = document.createElement('a');
        downloadLink.href = 'https://drive.google.com/uc?export=download&id=1Dldwm6GECabembD3GgDzqSNu9h6IW9jN';
        downloadLink.download = 'Narsi_Jangid_Resume.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
}); 