# 3.4. Polimorfisme

El **polimorfisme** és el quart pilar fonamental de la programació orientada a objectes.  
La paraula prové del grec *poly* (molts) i *morphé* (formes), i fa referència a la capacitat que tenen els objectes o mètodes de **prendre formes diferents** segons el context.

En OOP, el polimorfisme permet **utilitzar el mateix nom** per a operacions que actuen de manera diferent segons el tipus d’objecte o el nombre i tipus de paràmetres.

---

## 3.4.1. Tipus de polimorfisme

Hi ha dos grans tipus de polimorfisme:

| Tipus | Descripció | Exemple |
|-------|-------------|----------|
| **De compilació** (*estàtic*) | Es resol durant la compilació. Basat en la **sobrecàrrega de mètodes**. | `sumar(int, int)` i `sumar(double, double)` |
| **D’execució** (*dinàmic*) | Es resol durant l’execució. Basat en la **sobreescriptura** i l’ús de **variables polimòrfiques**. | `animal.ferSo()` pot invocar `Gos.ferSo()` o `Gat.ferSo()` |

---

## 3.4.2. Sobrecàrrega de mètodes (*polimorfisme estàtic*)

La **sobrecàrrega** ocorre quan dues o més funcions o mètodes tenen el mateix nom però diferents **paràmetres** (nombre o tipus).  
El compilador determina quina versió utilitzar segons els arguments passats.

```java
class Calculadora {
    int sumar(int a, int b){
        return a + b;
    }

    double sumar(double a, double b){
        return a + b;
    }

    int sumar(int a, int b, int c){
        return a + b + c;
    }
}
```

Ús:
```java
Calculadora c = new Calculadora();
System.out.println(c.sumar(2, 3));       // Crida a sumar(int, int)
System.out.println(c.sumar(2.5, 3.5));   // Crida a sumar(double, double)
System.out.println(c.sumar(1, 2, 3));    // Crida a sumar(int, int, int)
```

El mètode `sumar` adopta tres formes distintes, depenent dels paràmetres.  
Això és un exemple de **polimorfisme de compilació**.

---

## 3.4.3. Sobreescriptura de mètodes (*polimorfisme dinàmic*)

La **sobreescriptura** permet que una subclasse redefinisca un mètode de la seua superclasse amb el mateix nom, tipus de retorn i paràmetres.  
El mètode adequat s’executa segons el tipus real de l’objecte, encara que la referència siga de la superclasse.

```java
class Animal {
    void ferSo(){
        System.out.println("So genèric d’animal.");
    }
}

class Gos extends Animal {
    @Override
    void ferSo(){
        System.out.println("Bup! Bup!");
    }
}

class Gat extends Animal {
    @Override
    void ferSo(){
        System.out.println("Miau!");
    }
}
```

Ús:

```java
Animal a1 = new Gos();
Animal a2 = new Gat();

a1.ferSo(); // Bup! Bup!
a2.ferSo(); // Miau!
```

Encara que les referències són d’`Animal`, el mètode que s’executa correspon al tipus real (`Gos` o `Gat`).  
Aquest comportament s’anomena **enllaç dinàmic** o **polimorfisme d’execució**.

---

## 3.4.4. Variables polimòrfiques

Una **variable polimòrfica** és una referència d’una classe pare que pot apuntar a objectes de qualsevol de les seues subclasses.  
Això permet escriure codi més flexible i reutilitzable.

```java
Animal a;

a = new Gos();
a.ferSo(); // "Bup! Bup!"

a = new Gat();
a.ferSo(); // "Miau!"
```

Aquest mecanisme és essencial en molts dissenys orientats a objectes, ja que permet tractar col·leccions d’objectes heterogenis de manera uniforme.

---

## 3.4.5. Polimorfisme i interfícies

Les interfícies potencien encara més el polimorfisme, ja que una mateixa referència pot apuntar a qualsevol classe que les implemente.

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
```

Ús:

```java
Figura f1 = new Cercle(2.0);
Figura f2 = new Quadrat(3.0);

System.out.println(f1.area()); // 12.566...
System.out.println(f2.area()); // 9.0
```

Amb una mateixa variable (`Figura`) podem treballar amb diferents formes (cercle, quadrat, etc.), sense modificar el codi.

---

## 3.4.6. Exemple UML textual

```text
             ┌──────────────┐
             │   Animal     │
             │--------------│
             │ + ferSo()    │
             └──────┬───────┘
                    │
      ┌─────────────┴────────────┐
      │                          │
┌─────▼─────┐            ┌───────▼──────┐
│   Gos     │            │    Gat       │
│-----------│            │--------------│
│ + ferSo() │            │ + ferSo()    │
└───────────┘            └──────────────┘
```

---

## 3.4.7. Avantatges del polimorfisme

* **Flexibilitat**: el codi pot treballar amb tipus generals i adaptar-se a nous tipus sense canvis.  
* **Reutilització**: facilita l’ús d’interfícies i classes abstractes.  
* **Mantenibilitat**: redueix la necessitat de condicions `if` o `switch` per distingir tipus.  
* **Extensibilitat**: permet afegir nous comportaments sense alterar el codi existent.

---

## 3.4.8. Resum comparatiu

| Tipus | Moment de resolució | Basat en | Exemple |
|--------|---------------------|-----------|----------|
| **Sobrecàrrega** | Compilació | Signatura del mètode | `sumar(int, int)` i `sumar(double, double)` |
| **Sobreescriptura** | Execució | Tipus real de l’objecte | `animal.ferSo()` |
| **Variables polimòrfiques** | Execució | Referències de superclasse o interfície | `Figura f = new Cercle();` |

---

## 3.4.9. Conclusió

El polimorfisme és el principi que **connecta la jerarquia de classes amb la flexibilitat del codi**.  
Permet que diferents objectes responguen al mateix missatge de manera adaptada al seu tipus concret.

> *“El polimorfisme és l’art de dir una sola cosa i obtindre moltes respostes.”*
