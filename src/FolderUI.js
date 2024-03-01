import { input } from './data'
import { FaFolder } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function FolderUI() {
    return (
        <div>
            <Helper data={input} />
        </div>
    )
}
function Helper({ data }) {
    // data= [{type,name,contains},{},{}]
    return (
        <ul>
            {
                data.map(item => {
                    if (item.type === 'file') {
                        return (
                            <li><FaFileAlt /> {item.name}</li>
                        )
                    } else {
                        return (
                            <li>
                                <FaFolder />
                                {item.name}
                                <Helper data={item.contents} />
                            </li>
                        )
                    }
                })
            }
        </ul>
    )
}

// function addSum(num){
//     if(num===1) return num
//     return addSum(num-1)+num

// }

// N= 1,,,,N
// if
// N=5
// addSum(5): 1+2+3+4+5=15