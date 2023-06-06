const Header = () => {
    const menuItems = ["Home", "About", "Works", "Skills", "Contacts"];
    console.log(menuItems);
    const [activeTab, setActiveTab] = useState("Home");
    const handleClick = (item) => {
      setActiveTab(item);
      console.log(item + "clicked");
    };
    return (
      <>
        <div>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item)}
              className={activeTab === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="content">{activeTab === "Home" && <p>Home</p>}</div>
        <div className="content">{activeTab === "About" && <p>About</p>}</div>
      </>
    );
  };