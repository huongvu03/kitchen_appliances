import { useParams } from "react-router-dom";
import FileViewer from 'react-file-viewer'
import '../css/ManualDetail.css';

function ManualDetail({products}) {
    const { id } = useParams();
    console.log(id);

     const product = products.find(item => item.id == parseInt(id));
    console.log(products);
    console.log(product.manual);

    return (
        <div className="ManualDetail">

<div className="ManualDetaillink"ManualDetail><a href={product.manual} download>Download here</a></div>
          <div className="Manualdetailview">
          <div  >
                {/* <object width="100%"
                    height="700px"
                    data="./file/blenders.pdf"
                  
                    type="application/pdf"
                >
                    File Load Fails!
                </object> */}
                <FileViewer
        fileType='pdf' 
        filePath={product.manual}
/>
               
            </div>
            </div>  
        </div>



    );
}

         
           
  
export default ManualDetail;