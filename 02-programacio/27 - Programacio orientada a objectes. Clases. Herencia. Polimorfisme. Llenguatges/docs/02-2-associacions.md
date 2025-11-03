# 2.2. Associacions entre classes

En un sistema orientat a objectes, és habitual que una classe **no existisca de manera aïllada**, sinó que es relacione amb altres.  
Aquesta relació s’anomena **associació** i descriu com **uns objectes utilitzen o contenen** altres objectes.

Per exemple, un *Coche* pot tindre un *conductor* i diversos *passatgers*.  
Això implica que existeix una relació entre les classes `Coche` i `Persona`.

---

## 2.2.1. Tipus d’associacions

### 🔹 Associació simple

És la relació més bàsica: una classe fa referència a una altra.  
No implica cap dependència forta d’existència entre els objectes.

```java
class Coche {
    Persona conductor;
    Persona[] pasajeros;
}

class Persona {
    String DNI;
    String nombre;
}
```

En aquest cas, `Coche` coneix a `Persona`, però `Persona` pot existir perfectament sense `Coche`.  
La relació és de tipus “té un” (has-a).

---

## 2.2.2. Agregació

La **agregació** representa una relació del tipus *“part–tot”* **feble**.  
Les parts poden existir de manera independent del tot.  
Això significa que, si l’objecte contenidor deixa d’existir, els objectes continguts **no s’eliminen automàticament**.

Exemple: una **Biblioteca** té **Llibres**.  
Els llibres poden existir encara que tanque la biblioteca.

```java
class Libro {
    String titulo;
}

class Biblioteca {
    List<Libro> libros = new ArrayList<>();
}
```

Quan s’esborra una instància de `Biblioteca`, els objectes `Libro` continuen existint en memòria o poden estar referenciats des d’altres parts del programa.

### UML d’agregació (representació textual)

```text
Biblioteca <>----- Libro
```
El diamant buit (`<>`) indica agregació, i la fletxa apunta des del *tot* cap a la *part*.

---

## 2.2.3. Composició

La **composició** és una relació *“part–tot”* **forta**.  
Les parts **no poden existir sense el tot**; si l’objecte contenidor s’elimina, també desapareixen les seues parts.

Exemple: una **Casa** i les seues **Finestres**.

```java
class Ventana {
    String material;
    int ancho, alto;
}

class Casa {
    List<Ventana> ventanas;

    Casa() {
        ventanas = new ArrayList<>();
        ventanas.add(new Ventana());
        ventanas.add(new Ventana());
    }
}
```

Quan una `Casa` es destrueix, les seues `Ventana` deixen d’existir, ja que la seua vida depén directament de la instància de `Casa`.

### UML de composició (representació textual)

```text
Casa ■----- Ventana
```
El diamant ple (`■`) indica composició, mostrant una dependència forta.

---

## 2.2.4. Comparativa entre agregació i composició

| Característica | Agregació | Composició |
|----------------|------------|-------------|
| Existència de la part | Independent del tot | Depén del tot |
| Propietat | El tot *té* la part | El tot *conté* i *gestiona* la part |
| Duració de vida | La part pot sobreviure | La part s’elimina amb el tot |
| Exemples típics | Biblioteca–Llibre, Aula–Alumne | Casa–Finestra, Coche–Motor |
| Representació UML | Diamant buit (`<>`) | Diamant ple (`■`) |

---

## 2.2.5. Exemple aplicat: relació Coche–Motor

Una relació molt freqüent en exemples de POO és la de **composició** entre `Coche` i `Motor`.  
El motor *no té sentit* sense un cotxe concret.

```java
class Motor {
    int potencia;

    Motor(int potencia){
        this.potencia = potencia;
    }
}

class Coche {
    private Motor motor; // composició

    Coche(){
        motor = new Motor(120);
    }
}
```

Quan s’elimina l’objecte `Coche`, el seu `Motor` també desapareix, ja que forma part intrínseca de l’estructura interna del cotxe.

---

## 2.2.6. Exemple d’agregació: Coche–Conductor

En canvi, la relació entre un `Coche` i un `Conductor` és d’**agregació**:  
el conductor pot existir sense dependre del cotxe concret.

```java
class Conductor {
    String nombre;
    String licencia;
}

class Coche {
    Conductor conductor; // agregació

    Coche(Conductor c){
        conductor = c;
    }
}
```

Això permet que un mateix objecte `Conductor` puga estar associat a diferents objectes `Coche` en moments diferents, o que existisca encara que cap cotxe el referencie.

---

## 2.2.7. Altres tipus d’associacions

Encara que les més importants són l’agregació i la composició, també poden existir altres variants:

* **Associació bidireccional:** les dues classes es coneixen mútuament.  
* **Associació unidireccional:** només una classe coneix l’altra.  
* **Associació reflexiva:** una classe es relaciona amb instàncies d’ella mateixa (p. ex., `Empleado` supervisa `Empleado`).  
* **Multiplicitat:** indica el nombre d’instàncies implicades en la relació (`1..1`, `0..*`, `1..*`...).

Exemple de multiplicitat UML textual:

```text
Persona 1 ----- * Coche
```
Una persona pot tindre molts cotxes, però cada cotxe té exactament una persona propietària.

---

## 2.2.8. Resum visual

```text
         ┌────────────┐
         │  Coche     │
         ├────────────┤
         │ +motor     │──■──> Motor       (Composició)
         │ +conductor │──<>─> Conductor   (Agregació)
         └────────────┘
```

---

## 2.2.9. Conclusió

Les associacions entre classes permeten modelar la **realitat d’un sistema** mitjançant relacions entre objectes.  
Comprendre la diferència entre **agregació** i **composició** és fonamental per dissenyar correctament la jerarquia i dependència dels components d’una aplicació.

> *“En OOP, les relacions no sols connecten objectes; defineixen la seua raó d’existir dins del sistema.”*
