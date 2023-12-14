import '../css/LogIn.css';
function EmailData(){
   
    return(
        <div className="EmailData">
            <h1>Email Data </h1>
            <table>
                <tr>
                    <th><h4>Customer Email</h4></th>
                </tr>
                <tr>
                    <td><h5>{localStorage.getItem('data')}</h5></td>
                </tr>
            </table>
        </div>
    );
}export default EmailData;