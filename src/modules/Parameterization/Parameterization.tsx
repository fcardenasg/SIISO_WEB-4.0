import { Cancel, Close, Person } from "@mui/icons-material";
import React from "react";
import { ButtonLinkDashboard } from "../../components/buttons/ButtonLinkDashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useHistory } from "react-router";
import Modal from "@mui/material/Modal";
import Typeofcatalogs from "../Typeofcatalogs/Typeofcatalogs";
import { Box } from "@mui/system";
import colors from "../../styles/colors";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "50%",
  backgroundColor: "white",
  padding: 4,
  borderRadius: 2,
};

export const Parameterization = () => {
  const history = useHistory();
  const [openTypeOfCatalog, setOpenTypeOfCatalog] = React.useState(false);
  const handleClose = () => setOpenTypeOfCatalog(false);
  const handleOpen = () => setOpenTypeOfCatalog(true);

  return (
    /* Botones  */
    <div className="flex flex-1 w-full flex-col gap-10">
      <div className="w-full flex justify-between">
        <h1 className="text-md text-gray-700 font-montserrat font-semibold">
          Parametrización
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        <ButtonLinkDashboard
          title="Tipo de Catálogos"
          subtitle="Registro de tipos de catálogos"
          icon={<AssignmentIcon sx={{ fontSize: 40 }} />}
          onPress={handleOpen}
        />
        <ButtonLinkDashboard
          title="Catálogos"
          subtitle="Registro de catálogos"
          icon={<AutoStoriesIcon sx={{ fontSize: 40 }} />}
          onPress={() => history.push("Catalog")}
        />
        <ButtonLinkDashboard
          title="Empresas"
          subtitle="Registro de Empresas"
          icon={<CorporateFareIcon sx={{ fontSize: 40 }} />}
          onPress={() => history.push("Companies")}
        />
        <ButtonLinkDashboard
          title="Proveedores"
          subtitle="Registro de Proveedores"
          icon={<PermContactCalendarIcon sx={{ fontSize: 40 }} />}
          onPress={() => history.push("Supplier")}
        />
        <Modal
          open={openTypeOfCatalog}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex justify-end">
              <button onClick={handleClose}>
                <Cancel sx={{ color: colors.primary }} />
              </button>
            </div>
            <Typeofcatalogs />
          </Box>
        </Modal>
      </div>
    </div>
  );
};
