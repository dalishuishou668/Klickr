
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getImagesThunk } from '../../store/image';
import './NavBar.css';

const NavBar = ({ loaded }) => {
  const sessionUser = useSelector(state => state.session.user);
  console.log('sessionUser', sessionUser)
  let history = useHistory();
  const dispatch = useDispatch();
  let sessionLink;


  // SERACH IMAGE
  const allDbImages = useSelector(state => state.images)
  const ImagesArr = Object.values(allDbImages)

  const [resultImages, setResultImages] = useState([])
  const [searchKeyword, setSearchkeyword] = useState('')

  useEffect(() => {
    dispatch(getImagesThunk())
  }, [dispatch])


  const handleUserSearch = (e) => {
    const inputs = e.target.value;
    setSearchkeyword(inputs)

    const filteredImages = ImagesArr?.filter((image) => {
      const content = image.content.toLowerCase().includes(inputs.toLowerCase());
      return content
    })

    if (inputs === '') {
      setResultImages([])
    } else {
      setResultImages(filteredImages)
    }

  }

  if (sessionUser) {
    sessionLink = (
      <div>
        <nav>
          <ul>
            {/* <li>
              <NavLink to='/home' exact={true} activeClassName='active'>
                Home
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to='/users' exact={true} activeClassName='active'>
                Users
              </NavLink>
            </li> */}
            <li>
              <NavLink to='/explore' exact={true} >
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink to='/yourpage' exact={true} >
                You
              </NavLink>
            </li>
            {/* <li>
              <NavLink to='/search' exact={true} >
                Search
              </NavLink>
            </li> */}
            <li>
              <form className='searchForm'>
                <input
                  className="search"
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
            <li>
              <NavLink to='/upload' exact={true} >
                Upload
              </NavLink>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </nav>
      </div>
    )

  } else {
    sessionLink = (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
            {/* <li className='session'>
              <button className='demo-user-button' >
                Demo User
              </button>
            </li> */}
          </ul>
        </nav>
      </div>
    )

  }



  return (
    <div className='headerBar'>
      <div className='headerBarLeft'>

      </div>
      <div className='headerBarRight'>
        <ul>
          {loaded && sessionLink}
        </ul>

      </div>

    </div>
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to='/home' exact={true} activeClassName='active'>
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/login' exact={true} activeClassName='active'>
    //         Login
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/sign-up' exact={true} activeClassName='active'>
    //         Sign Up
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/users' exact={true} activeClassName='active'>
    //         Users
    //       </NavLink>
    //     </li>
    //     <li>
    //       <LogoutButton />
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default NavBar;
