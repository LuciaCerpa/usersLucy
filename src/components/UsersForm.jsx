import React, {useEffect, useState} from 'react';




const UsersForm = ({
    addUser,
    userSelected, 
    deselectUser,
    editUser
}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")
    
    useEffect(()=>{
        if(userSelected !== null){
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setBirthday(userSelected.birthday)
        }else{
            setEmail("")
            setPassword("")
            setFirstName("")
            setLastName("")
            setBirthday("")
        }
    }, [userSelected])
    
        const submit = e => {
            e.preventDefault();
            const user = {
                email, 
                password, 
                first_name: firstName,
                last_name: lastName, 
                birthday,
            }
    
            if(userSelected === null){
                addUser(user);
                setEmail("")
                setPassword("")
                setFirstName("")
                setLastName("")
                setBirthday("")

            }else{    
                editUser(user)
                deselectUser();
            }
            } 
        


    return (
        <div>
            <form onSubmit={submit} className='formUsers'>
            <div className='name'>
            <i className="uil uil-user"></i> 
                    <input 
                        type="text"     
                        placeholder='First Name'   
                        id="firstName"
                        onChange = { e => setFirstName(e.target.value)}
                        value={firstName}
                        />
                              
                    <input 
                        type="text"
                        placeholder='Last Name' 
                        id="lastName"
                        onChange = { e => setLastName(e.target.value)}
                        value={lastName}
                        />
                </div>
                <div>
                <i className="uil uil-envelope-alt"></i><input 
                        type="email" 
                        id="email" 
                        placeholder="Enter your email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        />    
                </div>

                <div>          
                <i className="uil uil-key-skeleton"></i><input 
                        type="password" placeholder='Type your password'    id="password"      
                        onChange = {e => setPassword(e.target.value)}
                        value={password}
                        />
                </div>          

                
                
                <div>
                <i className="uil uil-gift"></i>
                    <input 
                        type="date" 
                        id="birthday"
                        onChange = { e => setBirthday(e.target.value)}
                        value={birthday}
                        />
                </div>

                <button type="submit">Submit</button>
                
            </form>
        </div>
    );
};

export default UsersForm;