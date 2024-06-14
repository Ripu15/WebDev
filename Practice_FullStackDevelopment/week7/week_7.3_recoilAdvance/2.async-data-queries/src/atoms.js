import axios from "axios";
import { atom, selector } from "recoil";
//in this we can fetch live data from BE server
//store in atoms
//async data queries
//if we kow data will come async-ly we can do it as below.
export const notifications = atom({
    key: "networkAtom",
    default: selector({ //its a selector
        key: "networkAtomSelector",
        //'get' of selector can be async
        get: async() =>{
            //given artificial delay
            await new Promise(r=> setTimeout(r,5000))//sleep for 5 secs
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})