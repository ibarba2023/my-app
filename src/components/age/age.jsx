import { useEffect, useState } from "react";

export const Age = ({ birthday }) => {
  const [days, setDays] = useState(null);
  const [age, setAge] = useState(null);

  function daysUntilBirthday(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);

    // Ajustar el año del cumpleaños al año actual
    birthDate.setFullYear(today.getFullYear());

    // Si la fecha del cumpleaños es la misma que hoy, devolver 0
    if (
      today.getDate() === birthDate.getDate() &&
      today.getMonth() === birthDate.getMonth()
    ) {
      return 0;
    }

    // Si el cumpleaños ya pasó este año, ajustarlo al próximo año
    if (today > birthDate) {
      birthDate.setFullYear(today.getFullYear() + 1);
    }

    // Calcular la diferencia en milisegundos
    const diffTime = birthDate - today;

    // Convertir la diferencia de milisegundos a días
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  function calculateAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Ajustar la edad si el cumpleaños aún no ha ocurrido este año
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  useEffect(() => {
    setDays(daysUntilBirthday(birthday));
    setAge(calculateAge(birthday));
  }, [birthday]);

  return (
    <>
      {birthday ? (
        <>
          <h4>You have {age} years old!</h4>
          {days > 0 ? (
            <h4>There are {days} days left until your birthday</h4>
          ) : (
            <h4>Happy Birthday!!</h4>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
