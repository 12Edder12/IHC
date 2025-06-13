# Documentación del Proyecto Java con Doxygen

Este `README.md` describe el proceso de integración de la herramienta de documentación Doxygen en un proyecto Java, específicamente enfocado en el módulo de usuarios del sistema de alquiler de vehículos.

## ¿Qué es Doxygen?

Doxygen es una herramienta de documentación de código fuente que genera documentación en diversos formatos (HTML, PDF, RTF, XML, etc.) a partir de comentarios especiales dentro del código. Es ampliamente utilizado para proyectos en C++, Java, Python, C#, y muchos otros lenguajes. Facilita el mantenimiento de la documentación actualizada con el código, ya que se genera directamente desde él.

## Prerequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

1.  **Doxygen**: Descarga e instala la última versión de Doxygen desde su sitio web oficial.
    *   [Doxygen Downloads](https://www.doxygen.nl/download.html)
2.  **Graphviz**: Es una herramienta de visualización de gráficos que Doxygen utiliza para generar diagramas de clases, colaboración e inclusión.
    *   [Graphviz Downloads](https://graphviz.org/download/)

## Configuración del Doxyfile

El `Doxyfile` es el archivo de configuración principal de Doxygen. Para generarlo, abre tu terminal en la raíz del proyecto y ejecuta:

```bash
doxygen -g
```

Esto creará un archivo llamado `Doxyfile` en el directorio actual. A continuación, se detallan las secciones clave que se modificaron para este proyecto:

*   **Información del Proyecto**:
    ```properties
    PROJECT_NAME           = "Proyecto Alquiler Vehículos"
    PROJECT_NUMBER         = 1.0
    PROJECT_BRIEF         = "Documentación del módulo de Usuarios"
    ```
    Define el nombre, versión y una breve descripción del proyecto.

*   **Directorios de Entrada**:
    ```properties
    INPUT                  = src/main/java/com/car/rental/demo/Users
    FILE_PATTERNS         = *.java
    RECURSIVE             = YES
    ```
    Especifica el directorio donde Doxygen buscará los archivos fuente (`INPUT`), los patrones de archivos a incluir (`FILE_PATTERNS`) y si debe buscar recursivamente en subdirectorios (`RECURSIVE`).

*   **Configuración de Salida**:
    ```properties
    OUTPUT_DIRECTORY      = docs
    GENERATE_HTML         = YES
    GENERATE_LATEX        = NO
    OUTPUT_LANGUAGE       = Spanish
    ```
    Configura el directorio donde se generará la documentación (`OUTPUT_DIRECTORY`), los formatos de salida (HTML en este caso) y el idioma.

*   **Configuración de Diagramas (requiere Graphviz)**:
    ```properties
    HAVE_DOT             = YES
    CLASS_DIAGRAMS       = YES
    HIDE_UNDOC_RELATIONS = YES
    CLASS_GRAPH          = YES
    COLLABORATION_GRAPH  = YES
    ```
    Habilita la generación de diagramas de clases y colaboración utilizando Graphviz.

## Documentación del Código Java

Para que Doxygen genere la documentación, es necesario añadir comentarios especiales en el código Java. Se utilizan comentarios de tipo `/** ... */` o `///`.

### Documentación de Clases

Coloca el comentario justo antes de la declaración de la clase:

```java
/**
 * @brief Entidad que representa un usuario en el sistema
 *
 * Esta clase mapea la tabla 'users' en la base de datos y contiene
 * toda la información relacionada con un usuario del sistema.
 *
 * @author Nombre del Autor
 * @version 1.0
 */
public class User {
    // ...
}
```

### Documentación de Métodos

Coloca el comentario justo antes de la declaración del método, incluyendo `@param` para parámetros y `@return` para el valor de retorno:

```java
/**
 * @brief Busca un usuario por su ID de Firebase
 *
 * Este método permite encontrar un usuario específico utilizando su
 * identificador único de Firebase.
 *
 * @param uidFirebase El ID único de Firebase del usuario
 * @return Optional<User> Contiene el usuario si se encuentra, vacío si no
 * @throws IllegalArgumentException Si el uidFirebase es null o vacío
 */
Optional<User> findByUidFirebase(String uidFirebase);
```

### Documentación de Atributos

Puedes documentar los atributos de clase de la siguiente manera:

```java
/**
 * @brief Identificador único del usuario
 *
 * Este campo es la clave primaria de la tabla y se genera
 * automáticamente por la base de datos.
 */
private Long id;
```

## Generación de la Documentación

Una vez que hayas configurado el `Doxyfile` y añadido los comentarios a tu código, puedes generar la documentación ejecutando el siguiente comando en la terminal, desde la raíz de tu proyecto:

```bash
doxygen
```

Esto procesará tu código y generará los archivos HTML (y otros formatos si los configuraste) en el directorio `docs` (o el directorio que hayas especificado en `OUTPUT_DIRECTORY`).

## Visualización de la Documentación

Para ver la documentación generada, abre el archivo `index.html` que se encuentra dentro del directorio `docs` en tu navegador web:

```
./docs/html/index.html
```

## Estructura de la Documentación Generada

La documentación HTML generada por Doxygen proporciona una interfaz navegable con las siguientes secciones principales:

*   **Página Principal**: Muestra el nombre del proyecto y una breve descripción.
*   **Espacios de nombres (Namespaces)**: Representa los paquetes Java y sus contenidos.
*   **Clases**: Una lista de todas las clases, interfaces y enumeraciones documentadas, con enlaces a sus detalles.
*   **Archivos**: Permite navegar por los archivos de código fuente individuales.
*   **Diagramas**: Doxygen genera automáticamente diagramas de clases, herencia y colaboración, que son muy útiles para entender la arquitectura del sistema.
*   **Búsqueda**: Una barra de búsqueda para encontrar rápidamente clases, métodos o variables.

Con esta documentación, el módulo de usuarios de tu proyecto de alquiler de vehículos estará mucho mejor organizado y será más fácil de entender y mantener para cualquier desarrollador. 
