import { useState } from 'react';


const Frame2User =  () =>{

    const [choice, setChoice] = useState("")



    return(
        <>
        <form>

            <div className='OPENbtn'><button>OPEN AN ACCOUNT</button></div>
            <div className='WITHDRAWbtn'><button>WITHDRAW</button></div>
            <div className='DEPOSITbtn'><button>DEPOSIT</button></div>
            <div className='SERVICEbtn'><button>CUSTOMER SERVICE</button></div>


            <label>
                <input type="radio" 
                name="pwd" 
                value="PWD/SENIOR CITIZEN/PREGNANT"
                onChange={e => setChoice(e.target.value)}/>
                <span>PWD/SENIOR CITIZEN/PREGNANT</span>
            </label>

         </form>
        </>

    )

}

export default Frame2User;

