

export default function Login({handleLogin}) {



    return (<>
        <div className="container text-center mt-5">
        <h1>Login</h1>
        <button className="btn btn-info mt-3" onClick={handleLogin}>Login</button>
        </div>
    </>)
};
