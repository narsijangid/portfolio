document.addEventListener('DOMContentLoaded', function() {
    const resumeBtn = document.querySelector('#resume-btn');

    resumeBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // Step 1: Open the resume in a new tab
        const viewLink = 'https://drive.google.com/file/d/1up6odh7cicnOU5cZHEDMp57z-e2x2O1T/view?usp=sharing';
        window.open(viewLink, '_blank');

        // Step 2: Trigger direct download
        const fileId = '1up6odh7cicnOU5cZHEDMp57z-e2x2O1T';
        const downloadURL = `https://drive.google.com/uc?export=download&id=${fileId}`;

        setTimeout(() => {
            const downloadLink = document.createElement('a');
            downloadLink.href = downloadURL;
            downloadLink.download = 'Narsi_Jangid_Resume.pdf';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }, 0); // Wait a bit to ensure view tab opens
    });
});
