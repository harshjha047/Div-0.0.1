import SettingsTab from "./SettingsTab ";
import WishlistTab from "./WishlistTab";
import OrderHistoryTab from "./OrderHistoryTab";
import ProfileInfoTab from "./ProfileInfoTab";
import EditProfileInfoTab from "./EditProfileInfoTab";
import { useProfile } from "../../Contexts/ProfileContext";

function ProfileContent({tab}) {
  const {updateProfileData}=useProfile()
  console.log(tab);

  return (
    //  <!-- Profile Content -->
    <div class="container mx-auto px-4 max-w-6xl mb-16">
      {tab == "OrderHistoryTab" ? (
        <OrderHistoryTab />
      ) : tab == "WishlistTab" ? (
        <WishlistTab />
      ) : tab == "SettingsTab" ? (
        <SettingsTab />
      ) : updateProfileData?<EditProfileInfoTab/>:<ProfileInfoTab />}
    </div>
  );
}

export default ProfileContent;
