  import React,{ useState, useEffect } from 'react'
  import { Link, useHistory } from 'react-router-dom'
  import { login } from '../redux/actions/authAction'
  import {useDispatch, useSelector} from 'react-redux'

  const Login = () => {
    const initialState = { email:'', password: '' }
    const [userData, setUserData] = useState(initialState)
    const {email, password} = userData

    const [typePass,setTypePass] = useState(false)

    const {auth} = useSelector( state => state )
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
      if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
      const {name, value} = e.target
      setUserData({...userData,[name]:value})
    }

  const handleSubmit = e => {
    e.preventDefault()
    //console.log(userData) 
    dispatch(login(userData))
  }

    return (
      <div className='auth_page'>
          <form onSubmit={handleSubmit}>
              <img src="https://res.cloudinary.com/connect-plus/image/upload/v1688822979/connect-plus/Logo/connect_vlmzyw.svg" alt="logo" 
              style={{ width: '279px', height: '50px', paddingLeft: '40px', margin: '-10px 0 20px 0' }} />
              {/* <h3 className='text-uppercase text-center mb-4'>Connect+</h3> */}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                aria-describedby="emailHelp"  onChange={handleChangeInput} value={email} />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                  </small>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <div className='pass'>
                    <input type= "password" /*{ typePass ? "text" : "password" } */className="form-control" id="exampleInputPassword1" 
                    onChange={handleChangeInput} value={password} name="password" />
                </div>
                {/* <small onClick={()=>setTypePass(!typePass)}>
                  { typePass ? 'Hide': 'show' }
                </small> */}
              </div>
              <button type="submit" className="btn btn-dark w-100"
              disabled={email && password ? false : true}>
                Login
              </button>

              <p className='my-2'>
                You don't have an account? <Link to="/register" style={{color: "crimson"}}>Register Now</Link> 
              </p>
            </form>
      </div>
    )
  }

  export default Login