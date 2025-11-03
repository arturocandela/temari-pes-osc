# 3.4.3. Variables polimòrfiques

Una **variable polimòrfica** és una referència d’un tipus general (com una superclasse o interfície) que pot apuntar a **objectes de diferents subclasses**.  
Aquest concepte és fonamental per a entendre el **polimorfisme dinàmic** i permet escriure programes més flexibles, escalables i mantenibles.

---

## 3.4.3.1. Exemple bàsic

```java
class Vehiculo {
    void arranca(){
        System.out.println("El vehicle s'ha posat en marxa.");
    }
}

class VehiculoGasolina extends Vehiculo {
    @Override
    void arranca(){
        System.out.println("El vehicle de gasolina arranca amb motor tèrmic.");
    }
}

class Motocicleta extends Vehiculo {
    @Override
    void arranca(){
        System.out.println("La motocicleta arranca amb acceleració suau.");
    }
}
```

Ús:

```java
Vehiculo v1 = new VehiculoGasolina();
Vehiculo v2 = new Motocicleta();

v1.arranca(); // El vehicle de gasolina arranca amb motor tèrmic.
v2.arranca(); // La motocicleta arranca amb acceleració suau.
```

Tot i que `v1` i `v2` són variables de tipus `Vehiculo`, el **mètode que s’executa** depèn del tipus **real** de l’objecte, no del tipus de la referència.  
Això és **polimorfisme d’execució**.

---

## 3.4.3.2. Funcionament intern

Quan el compilador troba una crida a un mètode polimòrfic, **no sap** quina versió ha d’executar fins que l’objecte concret està disponible en temps d’execució.  
El sistema utilitza una **taula virtual (vtable)** per decidir quina implementació invocar.

Això permet que una mateixa referència (`Vehiculo`) puga apuntar a objectes molt diferents (`Motocicleta`, `Coche`, `Camió`, etc.), sempre que compartisquen una interfície comuna.

---

## 3.4.3.3. Exemple amb col·leccions

El polimorfisme és especialment útil quan treballem amb llistes o arrays d’objectes de tipus general.

```java
Vehiculo[] garatge = {
    new VehiculoGasolina(),
    new Motocicleta(),
    new Vehiculo()
};

for (Vehiculo v : garatge){
    v.arranca();
}
```

Eixida:

```
El vehicle de gasolina arranca amb motor tèrmic.
La motocicleta arranca amb acceleració suau.
El vehicle s'ha posat en marxa.
```

Cada element crida al seu propi mètode `arranca()`, gràcies al mecanisme de **enllaç dinàmic**.

---

## 3.4.3.4. Exemple amb interfícies

També es pot aplicar a interfícies, cosa que permet treballar amb diferents tipus d’objectes que compartixen una mateixa funcionalitat.

```java
interface Figura {
    double area();
}

class Cercle implements Figura {
    double radi;
    Cercle(double r){ radi = r; }
    public double area(){ return Math.PI * radi * radi; }
}

class Quadrat implements Figura {
    double costat;
    Quadrat(double c){ costat = c; }
    public double area(){ return costat * costat; }
}

public class Prova {
    public static void main(String[] args){
        Figura f1 = new Cercle(2);
        Figura f2 = new Quadrat(3);

        System.out.println(f1.area()); // 12.566
        System.out.println(f2.area()); // 9.0
    }
}
```

Així, la variable `Figura` pot referir-se a objectes de tipus `Cercle` o `Quadrat`, i cada un respon segons la seua pròpia implementació.

---

## 3.4.3.5. UML textual

```text
            ┌────────────┐
            │  Vehiculo  │
            │-------------│
            │ + arranca() │
            └──────┬──────┘
                   │
      ┌────────────┴────────────┐
      │                         │
┌─────▼────────┐        ┌───────▼────────┐
│VehiculoGasolina│      │  Motocicleta   │
│----------------│      │----------------│
│ + arranca()    │      │ + arranca()    │
└────────────────┘      └────────────────┘
```

Les fletxes representen la relació d’**herència**: les subclasses poden ser utilitzades com si foren la superclasse `Vehiculo`.

---

## 3.4.3.6. Avantatges de les variables polimòrfiques

* **Flexibilitat**: permet escriure codi que funcione amb diferents tipus d’objectes.  
* **Extensibilitat**: es poden afegir noves subclasses sense modificar el codi existent.  
* **Reutilització**: evita duplicar estructures de control (`if`, `switch`) per cada tipus concret.  
* **Independència del tipus concret**: el codi treballa amb la interfície comuna, no amb la implementació.

---

## 3.4.3.7. Limitacions i conversió de tipus

Les variables polimòrfiques només poden accedir als **mètodes visibles** per al tipus de referència.

```java
Vehiculo v = new Motocicleta();
v.arranca();        // OK
v.toString();       // OK (heretat de Object)
// v.revoluciona(); // ❌ Error si no està definit a Vehiculo
```

Per accedir a funcionalitats específiques de la subclasse, és necessari **fer un càsting**:

```java
Motocicleta m = (Motocicleta) v;
m.revoluciona(); // Ara sí
```

---

## 3.4.3.8. Resum final

| Concepte | Descripció | Exemple |
|-----------|-------------|----------|
| **Variable polimòrfica** | Referència de superclasse que pot apuntar a subclasses | `Vehiculo v = new Motocicleta();` |
| **Enllaç dinàmic** | Determinació del mètode real en temps d’execució | `v.arranca();` |
| **Ús comú** | Iterar col·leccions d’objectes diferents amb un tipus comú | `for (Vehiculo v : garatge)` |

---

> *“El veritable poder del polimorfisme no està en crear objectes diferents, sinó en poder tractar-los com si foren el mateix.”*
