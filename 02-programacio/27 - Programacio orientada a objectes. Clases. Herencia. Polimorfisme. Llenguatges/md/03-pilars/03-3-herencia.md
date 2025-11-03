# 3.3. Herència

La **herència** és el tercer pilar fonamental de la programació orientada a objectes.  
Permet crear noves classes a partir d’altres ja existents, heretant-ne **atributs** i **mètodes**, i afegint-hi o modificant-hi funcionalitats segons convinga.

Gràcies a la herència, es pot **reutilitzar codi** i evitar la duplicació, mantenint una jerarquia lògica que reflectix relacions del tipus **“és un” (is-a)**.

---

## 3.3.1. Principi bàsic

Quan una classe deriva d’una altra, la nova classe **hereta** totes les característiques de la seua antecessora, llevat dels elements declarats com a `private`.  
La classe base s’anomena **superclasse** i la que hereta, **subclasse**.

```java
public class Vehiculo {
    protected int km_totales;
    private String num_bastidor;
}

public class Coche extends Vehiculo {
    int num_pasajeros;
}

public class Camion extends Vehiculo {
    void soltarCaja(){
        System.out.println("Caixa desenganxada.");
    }
}
```

Ací, `Coche` i `Camion` **hereten** els atributs i mètodes públics i protegits de `Vehiculo`, com ara `km_totales`.  
L’atribut `num_bastidor`, en canvi, és `private` i per tant no és accessible des de les subclasses.

---

## 3.3.2. Exemple d’ús

```java
public class Vehiculo {
    protected int km_totales;
    private String num_bastidor;

    public Vehiculo(String bastidor){
        num_bastidor = bastidor;
        km_totales = 0;
    }

    public void avanza(int km){
        km_totales += km;
        System.out.println("Avançant " + km + " km.");
    }

    public int getKmTotales(){
        return km_totales;
    }
}

public class Coche extends Vehiculo {
    int num_pasajeros;

    public Coche(String bastidor, int pasajeros){
        super(bastidor); // crida al constructor de la superclasse
        num_pasajeros = pasajeros;
    }

    public void mostrarInfo(){
        System.out.println("Coche amb " + num_pasajeros + " passatgers.");
        System.out.println("Quilòmetres totals: " + km_totales);
    }
}
```

L’ús de `super()` permet inicialitzar la part heretada de la classe base.  
Les subclasses poden afegir nous atributs o mètodes propis sense duplicar codi.

---

## 3.3.3. Herència simple i múltiple

En Java, una classe **només pot heretar d’una altra** (herència simple).  
No obstant això, pot implementar diverses **interfícies**, cosa que permet aconseguir un efecte semblant a l’herència múltiple.

Altres llenguatges, com C++ o Python, sí que permeten **herència múltiple directa**, encara que pot generar ambigüitats si no es gestiona correctament.

| Tipus | Exemple | Comentari |
|--------|----------|------------|
| **Herència simple** | `class Coche extends Vehiculo` | Només una superclasse directa |
| **Herència múltiple (indirecta)** | `class Coche implements Motor, Conductor` | Diverses interfícies, sense duplicar implementació |

---

## 3.3.4. Reutilització i especialització

L’herència permet construir jerarquies que van de classes més generals a classes més específiques.  
Cada nivell pot **afegir o sobreescriure** funcionalitats de les classes superiors.

```java
class Vehiculo {
    void arranca(){ System.out.println("El vehicle arranca."); }
}

class Coche extends Vehiculo {
    void abrirMaletero(){ System.out.println("Maleter obert."); }
}

class Deportivo extends Coche {
    void activarModoSport(){ System.out.println("Mode Sport activat!"); }
}
```

### Jerarquia UML textual

```text
Vehiculo
   │
   └── Coche
          │
          └── Deportivo
```

Aquesta jerarquia mostra com `Deportivo` hereta de `Coche`, que al seu torn hereta de `Vehiculo`.

---

## 3.3.5. L’accés a la superclasse

La paraula clau `super` permet:

* Invocar el **constructor** de la classe base.
* Accedir a **mètodes o atributs** de la superclasse que hagen sigut redefinits.

```java
class Vehiculo {
    void mostrarTipo(){ System.out.println("Soc un vehicle."); }
}

class Coche extends Vehiculo {
    @Override
    void mostrarTipo(){
        super.mostrarTipo();  // Crida al mètode de la superclasse
        System.out.println("Concretament, soc un cotxe.");
    }
}
```

Eixida:
```
Soc un vehicle.
Concretament, soc un cotxe.
```

---

## 3.3.6. Avantatges de la herència

* **Reutilització de codi**: evita duplicar funcionalitats comunes.  
* **Extensibilitat**: permet afegir comportaments nous mitjançant subclasses.  
* **Organització jeràrquica**: estructura les classes de forma natural segons el domini.  
* **Polimorfisme**: possibilita que objectes de diferents subclasses siguen tractats com a instàncies d’una mateixa superclasse.

---

## 3.3.7. Riscos i bones pràctiques

Encara que la herència és molt útil, cal utilitzar-la amb criteri:

* No abusar-ne per **reutilitzar codi** quan realment només caldria composició (veure el principi *“preferix composició a herència”*).  
* Evitar herències massa profundes (més de tres nivells), ja que compliquen el manteniment.  
* Fer que les classes base siguen **coherents i estables**, per no trencar el funcionament de les subclasses.

---

## 3.3.8. Resum comparatiu

| Concepte | Descripció | Exemple |
|-----------|-------------|----------|
| **Superclasse** | Classe de la qual s’hereten atributs i mètodes | `Vehiculo` |
| **Subclasse** | Classe que hereta d’una altra i pot ampliar o modificar funcionalitats | `Coche` |
| **`super`** | Paraula clau per accedir a la superclasse | `super.avanza(10);` |
| **Herència simple** | Una única classe base | `class Coche extends Vehiculo` |
| **Herència múltiple** | Diverses classes base (només amb interfícies en Java) | `implements` |

---

## 3.3.9. Conclusió

La herència permet modelar relacions jeràrquiques i promou la reutilització i la coherència en el disseny del programari.  
Tanmateix, ha de combinar-se amb altres principis com la **composició**, la **cohesió** i el **polimorfisme** per mantenir un codi flexible i sostenible.

> *“Heretar és aprendre dels que ja existeixen per construir alguna cosa millor.”*
