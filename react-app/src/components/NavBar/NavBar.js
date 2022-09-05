
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getImagesThunk } from '../../store/image';
import img from '../../pictures/logo_screenshot.png';
// import {img2} from '../../pictures/logoutLogo.png'
import './NavBar.css';

const NavBar = ({ loaded }) => {
  const sessionUser = useSelector(state => state.session.user);
  console.log('sessionUser', sessionUser)
  let history = useHistory();
  const dispatch = useDispatch();
  let sessionLink;


  // // SERACH IMAGE
  // const allDbImages = useSelector(state => state.images)
  // const ImagesArr = Object.values(allDbImages)

  // const [resultImages, setResultImages] = useState([])
  // const [searchKeyword, setSearchkeyword] = useState('')

  // useEffect(() => {
  //   dispatch(getImagesThunk())
  // }, [dispatch])


  // const handleUserSearch = (e) => {
  //   const inputs = e.target.value;
  //   setSearchkeyword(inputs)

  //   const filteredImages = ImagesArr?.filter((image) => {
  //     const content = image.content.toLowerCase().includes(inputs.toLowerCase());
  //     return content
  //   })

  //   if (inputs === '') {
  //     setResultImages([])
  //   } else {
  //     setResultImages(filteredImages)
  //   }

  // }

  if (sessionUser) {
    sessionLink = (
      // <div className='loginNav'>
      <ul className='loginNav1'>
        <div className='loginNav1-left'>
          <li className='loginNav1-1'>
          {/* <img src='../static/logoutLogo.png'  className='logoutLogo' alt='user_logo' /> */}
            <img className="iconImg" src={img} alt="loading..." />

          </li>
          <li className='loginNav1-2'>
            <NavLink className='loginNavlink2' to='/explore' exact={true} >
              Explore
            </NavLink>
          </li>
          <li className='loginNav1-2'>
            <NavLink className='loginNavlink2' to='/yourpage' exact={true} >
              You
            </NavLink>
          </li>

        </div>

        {/* <div className='loginNav1-center'>
            <li className='loginNav1-2-search'>
              <form className='searchForm'>
                <input
                  className="searchNav"
                  placeholder="Search By Title"
                  value={searchKeyword}
                  onChange={handleUserSearch}
                />
              </form>
              <div>
                {ImagesArr && resultImages.length !== 0 && (
                  <div className='searchResultContainer'>
                    {resultImages.map((image) => (
                      <div>
                        <NavLink

                          className="searchResult"
                          to={`/images/${image.id}`}
                        >
                          {image.content}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </div> */}

        <div className='loginNav1-right'>
          <li className='loginNav1-2'>
            <NavLink className='loginNavlink2' to='/search' exact={true}>
              Search
            </NavLink>

          </li>
          <li className='loginNav1-2'>
            <NavLink className='loginNavlink2' to='/upload' exact={true} >
              Upload
            </NavLink>
          </li>
          <li className='loginNav1-2'>
            <LogoutButton />
          </li>

        </div>

      </ul>
      // </div>
    )

  } else {
    sessionLink = (
      <div className='logoutNav'>
        <div className='logoutnav-left'>
          <img src='../static/Klickr2-logos_white.png'  className='logoutLogo' alt='user_logo' />

        </div>
        <div className='logoutnav-right'>
          <ul className='logoutnav-right1'>
            <li className='logoutlink1'>
              <NavLink className='logoutlink1-1' to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li className='logoutlink1'>
              <NavLink className='logoutlink1-1' to='/sign-up' exact={true} activeClassName='active'>
                Sign up
              </NavLink>
            </li>
            {/* <li className='session'>
              <button className='demo-user-button' >
                Demo User
              </button>
            </li> */}
          </ul>
        </div>


      </div>
    )

  }



  return (

    <div className='headerBar'>
      {loaded && sessionLink}
    </div>





  );
}

export default NavBar;
