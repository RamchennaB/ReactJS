import PropTypes from 'prop-types'

function UserGreetings(props){
    const WelcomeMessage= <h2 className='welcome'>Welcome {props.Username}</h2>
    const Loginprompt = <h2 className='prompt'>Please Login to Continue</h2>
    return(props.isLoggedIn ? WelcomeMessage  : 
                                               Loginprompt );
}
export default UserGreetings
