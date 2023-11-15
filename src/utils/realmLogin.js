import Realm from "realm";

const app = new Realm.App({ id: "application-0-phlys" });
let user;

const realmLogin = async () => {
  const credentials = Realm.Credentials.anonymous();
  try {
    user = await app.logIn(credentials);
    console.log("Successfully logged in:", user.id);
  } catch (error) {
    console.error("Failed to login:", error.message);
  }
};

export { user };

export default realmLogin;
