# 3.3.1. Classes abstractes

Les **classes abstractes** són un tipus especial de classes que **no es poden instanciar directament**.  
Serveixen com a *models o plantilles* per a altres classes, definint el comportament general que les subclasses hauran d’implementar.

Una classe abstracta pot contenir:

* **Mètodes abstractes** (sense cos), que les subclasses estan obligades a implementar.  
* **Mètodes concrets** (amb cos), que poden ser reutilitzats o sobreescrits.  
* **Atributs comuns**, accessibles per totes les subclasses.

---

## 3.3.1.1. Exemple bàsic

```java
public abstract class Vehiculo {
    public abstract void arranca(); // mètode abstracte
}
```

Aquesta classe no es pot utilitzar per crear objectes directament:

```java
// ❌ Error:
Vehiculo v = new Vehiculo(); // No es pot instanciar una classe abstracta
```

Però sí que pot ser **base** d’altres classes que implementen els mètodes abstractes:

```java
public class VehiculoElectrico extends Vehiculo {
    @Override
    public void arranca(){
        System.out.println("El vehicle elèctric arranca silenciosament.");
    }
}

public class VehiculoGasolina extends Vehiculo {
    @Override
    public void arranca(){
        System.out.println("El vehicle de gasolina arranca amb soroll del motor.");
    }
}
```

---

## 3.3.1.2. Comportament

Quan una classe hereta d’una classe abstracta, **ha d’implementar tots els mètodes abstractes** o, en cas contrari, també s’ha de declarar com a abstracta.

```java
public abstract class Maquina {
    public abstract void iniciar();
}

public class Impresora extends Maquina {
    @Override
    public void iniciar(){
        System.out.println("La impressora està llesta per imprimir.");
    }
}
```

Així, `Impresora` proporciona la seua pròpia implementació del mètode `iniciar()`.

---

## 3.3.1.3. Classes abstractes amb atributs i mètodes concrets

Les classes abstractes també poden definir comportaments comuns a totes les subclasses:

```java
public abstract class Animal {
    protected String nom;

    public Animal(String nom){
        this.nom = nom;
    }

    // Mètode concret
    public void dormir(){
        System.out.println(nom + " està dormint...");
    }

    // Mètode abstracte
    public abstract void ferSo();
}

public class Gos extends Animal {
    public Gos(String nom){ super(nom); }

    @Override
    public void ferSo(){
        System.out.println("Bup! Bup!");
    }
}

public class Gat extends Animal {
    public Gat(String nom){ super(nom); }

    @Override
    public void ferSo(){
        System.out.println("Miau!");
    }
}
```

Eixida del programa:
```
Gos rex = new Gos("Rex");
rex.dormir();
rex.ferSo();
```
```
Rex està dormint...
Bup! Bup!
```

---

## 3.3.1.4. Comparació amb les classes normals

| Característica | Classe normal | Classe abstracta |
|----------------|----------------|-------------------|
| Es pot instanciar? | ✔️ Sí | ❌ No |
| Pot contindre mètodes abstractes? | ❌ No | ✔️ Sí |
| Pot contindre mètodes concrets? | ✔️ Sí | ✔️ Sí |
| Pot definir atributs? | ✔️ Sí | ✔️ Sí |
| Pot ser superclasse d’altres classes? | ✔️ Sí | ✔️ Sí |

---

## 3.3.1.5. Avantatges d’usar classes abstractes

* **Centralitzen el comportament comú**: eviten duplicar codi en subclasses.  
* **Forcen la implementació d’accions essencials** en les subclasses.  
* **Permeten combinar codi genèric amb obligacions específiques** (barreja de mètodes concrets i abstractes).  
* **Milloren la coherència** en el disseny d’un conjunt de classes relacionades.

---

## 3.3.1.6. Exemple UML textual

```text
            ┌────────────────────────────┐
            │        Vehiculo            │
            │────────────────────────────│
            │ + arranca() : void {abstract} │
            └──────────┬─────────────────┘
                       │
      ┌────────────────┴──────────────────┐
      │                                   │
┌─────▼────────────┐             ┌────────▼──────────┐
│ VehiculoGasolina │             │ VehiculoElectrico │
│------------------│             │-------------------│
│ arranca()        │             │ arranca()         │
└──────────────────┘             └───────────────────┘
```

---

## 3.3.1.7. Notes addicionals

* Si una classe abstracta conté només mètodes abstractes, podria substituir-se per una **interfície**.  
* No obstant això, si combina comportament comú amb definicions abstractes, **és preferible mantindre-la com a abstracta**.  
* Les subclasses poden sobreescriure mètodes concrets de la superclasse si cal un comportament diferent.

---

## 3.3.1.8. Resum final

| Concepte | Descripció | Exemple |
|-----------|-------------|----------|
| **Classe abstracta** | Classe que no pot ser instanciada i serveix com a model | `abstract class Vehiculo` |
| **Mètode abstracte** | Declaració sense cos que obliga a implementar-lo a les subclasses | `public abstract void arranca();` |
| **Subclasse concreta** | Implementa tots els mètodes abstractes | `VehiculoGasolina`, `VehiculoElectrico` |
| **Combinació amb mètodes concrets** | Possible, per compartir funcionalitats | `Animal.dormir()` |

---

> *“Les classes abstractes no són objectes, sinó idees que prenen forma a través de les seues filles.”*
