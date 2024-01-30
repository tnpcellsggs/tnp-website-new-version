import React, { useState, useEffect } from "react";
import Loading from "../../Utilities/Loading";
import { team_22_23 } from '../../../constants/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const TeamCards = (props) => {
    const { post, members } = props.item;
    return (
        <>
            <div className="relative my-4 border-2 h-5/6 nav-light-shadows rounded-xl">
                {/* top div */}
                <h2 className="pt-4 text-3xl text-center text-black">{post}</h2>
                <div className="flex flex-col flex-wrap items-center mx-auto mt-4 mb-4 justify-evenly sm:flex-row">

                    {
                        members.map((people, index) => {
                            const { name, imageLink, phoneNo, emailId, linkedinId, title } = people;
                            let string = imageLink.split('.com/uc')
                            string = string[0] + '.com/thumbnail' + string[1] + '&sz=w1000'
                            return (
                                <>
                                    <div className='flex flex-col items-center justify-center h-full m-2 rounded-2xl'
                                    key={index}>
                                        <div className="flex-col items-center justify-center h-[100%] w-full rounded-t-2xl"
                                        >
                                            {/* div for intro  */}
                                            {/* <IconDiamond className=" flex-col items-center justify-center w-[50%] h-[100%] rounded-t-2xl"> */}
                                            <img src={string} alt={name} className="w-[50%] rounded-full nav-darker-shadows align-center text-center mx-auto mt-2 mb-2" referrerPolicy="no-referrer"/>
                                            <div className="z-20 flex flex-col items-center justify-center w-full text-center ">
                                                <h3 className='w-full text-xl font-bold text-center text-black'>{name}</h3>
                                                <p className="text-center text-gray-600">{title}</p>
                                            </div>
                                            {/* </IconDiamond> */}
                                        </div>

                                        {/* div for contacts */}
                                        <div className="flex items-center justify-center w-full h-[50%] bg-[#eff6ff] rounded-2xl">
                                            <div className="flex-col items-center justify-center rounded-2xl">
                                                <p className="p-2 m-2 text-center border-2 hover:cursor-pointer hover:bg-blue-400 rounded-xl"><a href={`mailto:${emailId}`} >{emailId} | <FontAwesomeIcon icon={faEnvelope} /></a></p>
                                                <p className="p-2 m-2 text-center border-2 hover:bg-blue-400 rounded-xl hover:cursor-pointer"><a href={`tel:${phoneNo}`}>{phoneNo} | <FontAwesomeIcon icon={faPhone} /></a></p>
                                                <p className="p-2 m-2 text-center border-2 hover:bg-blue-400 rounded-xl hover:cursor-pointer"><a href={linkedinId}>Linkedin | <FontAwesomeIcon icon={faLinkedinIn} /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default function NewTeam(props) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, props.runs);
    }, []);
    return (
        <>
            <div >
                <h1 className="m-4 text-3xl text-center text-black">OUR STUDENTS TEAM (2022-2023)</h1>
                <div >
                    {isLoading ? (<Loading size="80" width="10" speed="1" />) : (<>
                        {team_22_23.map((items, index) => { return (<TeamCards key={`${index}` + items.post} index={index} item={items} />) })}
                    </>)}
                </div>
            </div>
        </>
    );
}
