SELECT e.Nombre, COUNT(pe.id) as Empleados
FROM PRUEBA.Empresa e, PRUEBA.PersonaEmpresa pe
WHERE pe.IdEmpresa = e.Id
GROUP BY e.id, e.Nombre;