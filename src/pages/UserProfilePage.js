import Navbar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";

function UserProfilePage() {
  return (
    <div>
      <Navbar>
        <UserProfile />
      </Navbar>
    </div>
  );
}

export default UserProfilePage;
