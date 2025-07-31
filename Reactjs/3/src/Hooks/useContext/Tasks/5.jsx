import React, { useState } from "react";

// 1. Create the AppContext
const ConfigContext = React.createContext();
const UserContext = React.createContext();
const NotificationsContext = React.createContext();
export default function Example5() {
    const [config, setConfig] = React.useState({ theme: "light", lang: "en" });
    const [user, setUser] = React.useState({ name: "Alice", id: 1 });
    const [notifications, setNotifications] = React.useState([
        { id: 1, msg: "Welcome!" }
    ]);

    // Single context value object
    const configContextValue = React.useMemo(
        () => ({
            config,
            setConfig,
        }),
        [config]
    );

    const userContextValue = React.useMemo(
        () => ({
            user,
            setUser,
        }),
        [user]
    );

    const notificationsContextValue = React.useMemo(
        () => ({
            notifications,
            setNotifications,
        }),
        [notifications]
    );
    return (
        <ConfigContext.Provider value={configContextValue}>
            <UserContext.Provider value={userContextValue}>
                <NotificationsContext.Provider value={notificationsContextValue}>
                    <div style={{ display: "flex", gap: "2rem" }}>
                        <ConfigPanel />
                        <UserProfile />
                        <NotificationsBox />
                    </div>
                    {/* Demo controls */}
                    <button
                        onClick={() =>
                            setNotifications((n) => [
                                ...n,
                                { id: n.length + 1, msg: `New message #${n.length + 1}` }
                            ])
                        }
                    >
                        Add Notification
                    </button>
                    <button
                        onClick={() => {
                            setUser((u) => ({ ...u, name: u.name + "!" }))
                        }
                        }
                    >
                        Change User Name
                    </button>
                </NotificationsContext.Provider>
            </UserContext.Provider>
        </ConfigContext.Provider>
    );
}

const ConfigPanel = React.memo(function ConfigPanel() {
    const { config } = React.useContext(ConfigContext);
    React.useEffect(() => {
        console.log("ConfigPanel rendered");
    });
    return (
        <section>
            <h2>Config</h2>
            <pre>{JSON.stringify(config, null, 2)}</pre>
        </section>
    );
});

const UserProfile = React.memo(function UserProfile() {
    const { user, setUser } = React.useContext(UserContext);
    React.useEffect(() => {
        console.log("UserProfile rendered");
    });
    return (
        <section>
            <h2>User</h2>
            <div>
                Name: {user.name}
                <button onClick={() => setUser({ ...user, name: user.name + "!" })}>
                    Excite Name
                </button>
            </div>
        </section>
    );
});

const NotificationsBox = React.memo(function NotificationsBox() {
    const { notifications } = React.useContext(NotificationsContext);
    React.useEffect(() => {
        console.log("NotificationsBox rendered");
    });
    return (
        <section>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((n) => (
                    <li key={n.id}>{n.msg}</li>
                ))}
            </ul>
        </section>
    );
});
