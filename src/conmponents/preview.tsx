import { FC } from "react";

interface Iprops {
    userName : string;
    img: string;
    children: JSX.Element | JSX.Element[];
}

const PlayerPreview: FC<Iprops> = (props: Iprops): JSX.Element => (
        
        <div className="column">
           <div >
                <img className="avatar" src={props.img} alt="" />
                <h2 className="username">{props.userName}</h2>                    
            </div>       
            {props.children} 
        </div>
    )

export default PlayerPreview; 