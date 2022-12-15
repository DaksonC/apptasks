import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { getDepartaments } from "../../api/departaments";
import { IDepartaments } from "../../interfaces";

interface ISelectDepartamentsProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

export function SelectDepartaments({
  onChange,
  name,
}: ISelectDepartamentsProps) {
  const [departaments, setDepartaments] = useState<IDepartaments[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getDepartaments();
      setDepartaments(response);
      // console.log(response);
    })();
  }, []);

  return (
    <Select
      placeholder="Select department"
      bg="gray.100"
      color="gray.500"
      _hover={{
        bg: "gray.100",
      }}
      _focus={{
        bg: "gray.200",
        border: "none",
      }}
      name={name}
      onChange={onChange}
    >
      {departaments.map((departament) => (
        <option key={departament.id} value={departament.id}>
          {departament.name}
        </option>
      ))}
    </Select>
  );
}
