
function EmailData(){
   
    return(
        <div>
            <h5>Email Data From Home Page For Promotion information</h5>
            <table>
                <tr>
                    <th>customer email</th>
                </tr>
                <tr>
                    <td>{localStorage.getItem('data')}</td>
                </tr>
            </table>
        </div>
    );
}export default EmailData;