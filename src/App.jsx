import './App.css'

const userInformation = {
    name : 'Rəfi Əlizadə',
    job : 'Frontend Developer',
    imageURL : 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1488'
  };

function App() {
  return (
    <div className="user_container">
      <div className="user_box">
        <div className="user_img">
        <img src={userInformation.imageURL} className="user_img" />
        </div>

        <div className="user_head">
          <p className="user_name">{userInformation.name}</p>
          <p className="user_job">{userInformation.job}</p>
        </div>

        <div className="user_tools">
          <ul className="user_tools_ul">
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>BEM Methods</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
