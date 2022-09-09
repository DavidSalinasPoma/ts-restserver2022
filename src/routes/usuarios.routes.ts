import { Router } from 'express';

// Metodos del Controlador Usuarios
import {
    deleteUsuario,
    indexUsuario,
    showUsuario,
    storeUsuario,
    updateUsuario
} from '../controllers/usuarios.controller';

const router: Router = Router();

// EndPoints
router.get('/usuarios', indexUsuario);
router.get('/usuarios/:id', showUsuario);
router.post('/usuarios', storeUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

export default router;