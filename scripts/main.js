import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const container = document.querySelector('.render');
// Сцена
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF); // Светло-серый фон
// Камера
const camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

// Рендерер
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Включить сглаживание
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio); // Учесть плотность пикселей
renderer.shadowMap.enabled = true; // Включить тени

// После создания camera и renderer
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Плавное движение
controls.dampingFactor = 0.05;

// Освещение
const ambientLight = new THREE.AmbientLight(0x505050, 1); // Мягкое окружающее освещение
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 10, 8);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Загрузка модели
const loader = new OBJLoader();

async function loadModel() {
    try {
        const object = await loader.loadAsync('../assets/obj/NDDI .obj');
        
        // Вычисляем ограничивающую рамку для центрирования модели
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Центрируем модель
        object.position.x += (object.position.x - center.x);
        object.position.y += (object.position.y - center.y);
        object.position.z += (object.position.z - center.z);
        
        // Настраиваем камеру чтобы модель полностью была в поле зрения
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / Math.sin(fov / 1));
        
        // Добавляем немного отступа
        cameraZ *= 1.5;
        camera.position.z = cameraZ;
        
        // Настраиваем ближнюю и дальнюю плоскости камеры
        camera.near = cameraZ / 100;
        camera.far = cameraZ * 100;
        camera.updateProjectionMatrix();
        
        // Добавляем тени для всех дочерних мешей
        object.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                
                // Добавляем базовый материал если его нет
                if (!child.material) {
                    child.material = new THREE.MeshStandardMaterial({ 
                        color: 0x3498db,
                        roughness: 0.3,
                        metalness: 0.1
                    });
                }
            }
        });
        
        scene.add(object);
        console.log('Модель загружена:', object);
        
    } catch (error) {
        console.error('Ошибка загрузки модели:', error);
    }
}

// Анимация
function animate() {
    requestAnimationFrame(animate);
    
    // Медленное вращение модели
    if (scene.children[4]) { // Если модель загружена
        const model = scene.children[4]; // Предполагаем что модель 4-й элемент
        model.rotation.y += 0.0007;
    }
    
    renderer.render(scene, camera);
}

// Добавляем рендерер в контейнер
container.replaceChildren(renderer.domElement);

// Обработка изменения размера окна
function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);

// Запуск
loadModel();
animate();
// Заполняющий свет с другой стороны
const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
fillLight.position.set(-5, 5, 5);
scene.add(fillLight);

// Контровой свет для выделения контуров
const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
backLight.position.set(0, 0, -5);
scene.add(backLight);

// Для еще более красивого рендера можно добавить:
// - Tone mapping
// - Gamma correction
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;