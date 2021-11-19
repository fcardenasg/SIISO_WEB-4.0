
import React from "react";
import { useHistory } from "react-router";
import { ButtonLinkDashboard } from "../../components/buttons/ButtonLinkDashboard";
import { ButtonLinkLogin } from "../../components/buttons/ButtonLinkLogin";
import { itemsMenupurchases, MenuItem } from "./itemspurchases";
import MenuItemspurchases from "./MenuItemspurchases";

export const HomeScreenpurchases = () => {
  const history = useHistory();
  const [itemsMenuButton, setItemsMenuButton] = React.useState<MenuItem[]>([
    ...itemsMenupurchases,
  ]);

  const selectedItem = (itemSelected: MenuItem) => {
    const aux = itemsMenuButton.map((item) => {
      if (item.title === itemSelected.title) {
        return { ...item, selected: !item.selected };
      } else {
        return item;
      }
    });
    setItemsMenuButton(aux);
  };

  const navigateTo = (url: string) => {
    history.push(url);
  }

  return (
    <div className="flex flex-1 w-full flex-col gap-10">
      <div className="w-full flex justify-between">
        <h1 className="text-md text-gray-700 font-montserrat font-semibold">
          Dimensiones
        </h1>
        {/* menu */}
        <MenuItemspurchases itemspurchases={itemsMenuButton} selectedItem={selectedItem} />

      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        {itemsMenuButton
          .filter((item) => item.selected)
          .map((item) => (
            <ButtonLinkDashboard
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              onPress={() => navigateTo(item.url)}
            />
          ))}
      </div>
      <span className="text-gray-700 font-montserrat font-semibold text-md">
        ¿Qué deseas hacer?
      </span>
      <div className="grid grid-cols-2 gap-2 pb-3 lg:grid-cols-4">
        <ButtonLinkLogin url="ComTypeofcatalogs">
          <span>Tipo de catalogo</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="ComCatalog">
          <span>Catalogo</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="ComSupplier">
          <span>Proveedores</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Opción 3</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Opción 3</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Opción 3</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Opción 3</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Opción 3</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Opción 3</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Opción 3</span>
        </ButtonLinkLogin>
      </div>
    </div>
  );
};
