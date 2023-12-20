import { useParams } from "react-router-dom";

import React from 'react';

import '../css/ManualDetail.css';



function ManualDetail({ products }) {
    const { id } = useParams();
    console.log(id);

    const product = products.find(item => item.id == parseInt(id));
    console.log(products);
    console.log(product.manual);

    return (
        <div className="ManualDetail">

            <div className="Manualdetailview" >

                {/* <object width="100%"
                    height="700px"
          
                  data={product.manual}
                    type="application/pdf"
                >
                    File Load Fails!
                </object>  */}
                {/* <FileViewer
        fileType='pdf' 
        filePath={product.manual} */}
                {/* /> */}
                <embed src={product.manual} width="100%" height="700px"
                    type="application/pdf"></embed>


            </div>
        </div>

    );
}




export default ManualDetail;