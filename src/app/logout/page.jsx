import { signOut } from "@/auth";
import {logout } from "@/lib/actions";






function PaginaLogout() {
    return (
        <div>
            <form action ={logout}>
                <button>Logout</button>
            </form>
        </div>
    );
}

export default PaginaLogout;