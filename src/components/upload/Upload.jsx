import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import {
  attachmentsCreate,
  clearAttachment,
} from "../../services/store/slices/attachmentsSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearMaintenance } from "../../services/store/slices/maintenancesSlice";

export default function Upload({ entity, entityName, redirect }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { data, isLoading, error } = useSelector(
    (state) => state.attachments?.create
  );
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [name, setName] = useState("");

  const handleFileChange = (event) => {
    console.log("File changed : ", event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("entity", entity);
    formData.append("entityName", entityName);
    formData.append("name", name);
    formData.append("file", file);
    dispatch(attachmentsCreate(formData));
  };

  useEffect(() => {
    if (data) {
      if (entityName === "maintenance") dispatch(clearMaintenance());
      else dispatch(clearAttachment());
    }
  }, []);

  useEffect(() => {
    if (data && file) {
      if (redirect) navigate(redirect);
    }
  }, [data, file, navigate, redirect]);

  const clearInputs = () => {
    setFile("");
    setName("");
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div className="mt-5">
        <Input
          label="Nom du fichier"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-5 flex justify-around">
        <div className="w-fit">
          <Button
            type="submit"
            fullWidth
            className="mt-3 flex justify-center items-center gap-3 bg-purple-400"
            onClick={handleUpload}
          >
            Confirmer l'ajout
          </Button>
        </div>
        <div className="w-1/3">
          <Button
            className="mt-3 flex justify-center items-center gap-3 bg-purple-400"
            onClick={clearInputs}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}

