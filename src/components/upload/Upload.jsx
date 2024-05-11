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
  const [uploaded, setUploaded] = useState(false); // Add uploaded state

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploaded(true); // Set uploaded state to true
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
    setUploaded(false); // Reset uploaded state to false
  };

  return (
    <div>
      {/* <input type="file" onChange={handleFileChange} /> */}
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
      >
        <div className="flex flex-col items-center justify-center p-2">
          <svg
            className={`w-5 h-5 mb-2 ${uploaded ? "text-green-500" : "text-gray-500"}`} // Change color based on uploaded state
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 text-center">
            <span className="font-semibold">
              {uploaded ? file.name : "Cliquez pour télécharger"}
            </span>{" "}
            {/* Display file name if uploaded */}
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
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

