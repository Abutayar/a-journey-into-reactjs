export default function Tabs({ menu, MenuContainer = "menu", children }) {
  //const MenuContainer = menuContainer || "menu";
  return (
    <>
      <MenuContainer>{menu}</MenuContainer>
      {children}
    </>
  );
}
