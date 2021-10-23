
import React from "react";
import { useHistory } from "react-router";
import { ButtonLinkDashboard } from "../../../components/buttons/ButtonLinkDashboard";
import { ButtonLinkLogin } from "../../../components/buttons/ButtonLinkLogin";
import { itemsMenu, MenuItem } from "./items";
import MenuItems from "./MenuItems";

export const HomeScreen = () => {
  const history = useHistory();
  const [itemsMenuButton, setItemsMenuButton] = React.useState<MenuItem[]>([
    ...itemsMenu,
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
        <MenuItems items={itemsMenuButton} selectedItem={selectedItem} />

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
        <ButtonLinkLogin url="">
          <span>Medicina Laboral</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Historico Medicina Lab.</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Ausentismo Laboral</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Reintegro</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Accidente de Trabajo</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Asesorias Medicas</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Pruebas de AD</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Framingham</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Ordenes</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Derechos de Petición</span>
        </ButtonLinkLogin>
      </div>
    </div>
  );
};
