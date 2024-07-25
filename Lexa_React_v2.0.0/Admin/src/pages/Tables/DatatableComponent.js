// // datatableTables.js
// export async function DatatableComponent() {
//     try {
//         const response = await fetch('/api/csvData'); // Adjust the endpoint as per your backend setup
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
  
//         // Convert data to CSV format
//         let csvContent = 'data:text/csv;charset=utf-8,';
//         data.forEach(entry => {
//             const row = Object.values(entry).join(',');
//             csvContent += row + '\r\n';
//         });
  
//         // Create a CSV blob and initiate download
//         const encodedUri = encodeURI(csvContent);
//         const link = document.createElement('a');
//         link.setAttribute('href', encodedUri);
//         link.setAttribute('download', 'student_new_Data.csv');
//         document.body.appendChild(link);
//         link.click();
  
//         // Redirect to a website after download
//         window.location.href = '/tables-datatable'; // Replace with your desired URL
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
//   }
// datatableTables.js
export async function fetchAndDownloadCSV() {
    try {
        const response = await fetch('/api/csvData'); // Adjust the endpoint as per your backend setup
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        // Convert data to CSV format
        let csvContent = 'data:text/csv;charset=utf-8,';
        data.forEach(entry => {
            const row = Object.values(entry).join(',');
            csvContent += row + '\r\n';
        });

        // Create a CSV blob and initiate download
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'student_new_Data.csv');
        document.body.appendChild(link);
        link.click();

        // Redirect to a website after download
        window.location.href = '/tables-datatable'; // Replace with your desired URL
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

  