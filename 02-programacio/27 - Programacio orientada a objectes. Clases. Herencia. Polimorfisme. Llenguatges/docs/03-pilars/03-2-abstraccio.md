# 3.2. Abstracció

La **abstracció** és el segon pilar fonamental de la programació orientada a objectes.  
Consisteix a **centrar-se en l’essència d’un objecte** i **amagar els detalls no rellevants** per a l’ús que se’n fa.  

És un mecanisme que permet **reduir la complexitat** mostrant només la informació necessària i ocultant tot el que no cal conéixer per a utilitzar una classe.

---

## 3.2.1. Idea clau

L’abstracció és el procés de **definir què fa un objecte**, sense preocupar-se de **com ho fa**.  
Això permet separar **el concepte** (l’interfície visible) de **la implementació** (els detalls interns).

> 🧠 “Abstraure és descriure el *què* i amagar el *com*.”

Per exemple, per arrancar un cotxe n’hi ha prou amb cridar el mètode `arranca()`.  
No cal saber quins passos interns realitza el motor, si injecta combustible o si activa components interns.  
El mètode **abstrau** tot aquest comportament en una única operació d’alt nivell.

---

## 3.2.2. Exemple d’abstracció

```java
class Coche {
    private boolean en_marcha;

    public void arranca(){
        prepararCombustible();
        activarBateria();
        girarMotor();
        en_marcha = true;
    }

    // Detalls interns (no visibles externament)
    private void prepararCombustible(){ /* ... */ }
    private void activarBateria(){ /* ... */ }
    private void girarMotor(){ /* ... */ }
}
```

Des de fora, l’usuari només veu:
```java
miCoche.arranca();
```

Tot el procés tècnic (els mètodes `prepararCombustible()`, `activarBateria()`, `girarMotor()`) queda amagat.  
Així s’aconsegueix que la interfície siga senzilla i intuïtiva, mentre que la implementació pot evolucionar o canviar sense afectar els usuaris de la classe.

---

## 3.2.3. Beneficis de l’abstracció

* **Simplifica la interacció amb els objectes**: l’usuari no ha de conéixer els detalls interns.  
* **Millora la llegibilitat**: el codi és més net i expressiu.  
* **Permet el canvi independent**: la implementació pot canviar sense afectar el codi que la utilitza.  
* **Facilita la reutilització**: classes diferents poden compartir la mateixa interfície amb implementacions pròpies.

---

## 3.2.4. Abstracció i interfícies

L’abstracció s’aplica també mitjançant **classes abstractes** i **interfícies**, que defineixen *què pot fer* una classe sense especificar *com* ho fa.  

```java
abstract class Vehiculo {
    public abstract void arranca();  // Només es defineix el QUÈ
}

class Coche extends Vehiculo {
    @Override
    public void arranca(){           // Es defineix el COM
        System.out.println("El cotxe arranca amb clau o botó.");
    }
}

class Bicicleta extends Vehiculo {
    @Override
    public void arranca(){
        System.out.println("La bicicleta arranca amb la força de les cames.");
    }
}
```

Cada subclasse implementa la mateixa acció (“arrancar”) segons el seu propi comportament, mantenint la mateixa interfície.

---

## 3.2.5. Exemple conceptual

```text
           ┌────────────────────────┐
           │        Vehiculo        │
           │------------------------│
           │ + arranca() : void     │  ← Descripció general (abstracció)
           └──────────┬─────────────┘
                      │
     ┌────────────────┴────────────────┐
     │                                 │
┌────▼─────┐                    ┌──────▼─────┐
│  Coche   │                    │ Bicicleta  │
│----------│                    │------------│
│ arranca()│                    │ arranca()  │
└──────────┘                    └────────────┘
```

---

## 3.2.6. Abstracció vs. Encapsulació

Encara que estan relacionats, **abstracció i encapsulació no són el mateix**:

| Concepte | Objectiu | Exemple |
|-----------|-----------|----------|
| **Encapsulació** | Amagar les dades internes i protegir-les | `private int edat;` + `getEdat()` |
| **Abstracció** | Amagar els detalls de la implementació i mostrar només les funcionalitats essencials | `arranca()` sense mostrar com funciona el motor |

L’encapsulació és una **tècnica** per aconseguir l’abstracció, mentre que l’abstracció és un **principi de disseny**.

---

## 3.2.7. Exemple del món real

En un telèfon mòbil, l’usuari pot fer una foto prement un botó:  
no necessita conéixer com la càmera ajusta l’exposició, la resolució o el focus.  
Eixos detalls queden amagats darrere d’una **interfície simple i abstracta**.

De la mateixa manera, en OOP, una classe ofereix una interfície senzilla i amaga la complexitat interna.

---

## 3.2.8. Resum final

| Concepte | Descripció | Exemple |
|-----------|-------------|----------|
| **Abstracció** | Amaga detalls no rellevants i ofereix operacions d’alt nivell | `arranca()` encapsula el procés intern |
| **Classe abstracta** | Defineix el *què* sense el *com* | `abstract void arranca();` |
| **Interfície** | Contracte d’ús sense implementació | `interface Vehiculo { void arranca(); }` |
| **Benefici** | Simplificació i independència de la implementació | L’usuari no ha de saber com funciona internament |

---

> *“Abstraure és reduir el món a la seua essència per poder-lo comprendre i construir-lo millor.”*
