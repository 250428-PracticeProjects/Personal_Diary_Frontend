function Register() {
    return (
      <div>
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Username" required /><br/>
          <input type="password" placeholder="Password" required /><br/>
          <input type="password" placeholder="Confirm Password" required /><br/>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
  
  export default Register;
  
