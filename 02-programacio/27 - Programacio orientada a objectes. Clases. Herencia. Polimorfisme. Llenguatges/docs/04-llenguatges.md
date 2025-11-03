# Llenguatges OOP (més representatius)

Aquest apartat resumeix els principals llenguatges utilitzats en la Programació Orientada a Objectes (POO) i el seu grau de puresa, paradigma i àmbit d’aplicació.  
Aquesta comparació ajuda a comprendre com s’apliquen els conceptes de classes, herència, polimorfisme i encapsulació segons el llenguatge.

---

## 🟦 Java (Pur)

* **Paradigma**: Orientat completament a objectes (encara que admet tipus primitius).  
* **Àmbit**: Multipropòsit — aplicacions d’escriptori, servidors, Android, IoT.  
* **Característiques destacades**:  
  - Llenguatge compilat a bytecode, interpretat per la *Java Virtual Machine (JVM)*.  
  - Gran ecosistema d’eines (Spring, Hibernate, Maven).  
  - Gestió automàtica de memòria (*Garbage Collector*).  
  - Fortament tipat i multiplataforma (“Write Once, Run Anywhere”).  
* **Limitacions**: Verbositat en comparació amb llenguatges dinàmics.

---

## 🟩 C# (Pur)

* **Paradigma**: Completament orientat a objectes dins de la plataforma .NET.  
* **Àmbit**: Escriptori, web, videojocs (*Unity*), aplicacions mòbils (*MAUI*).  
* **Característiques destacades**:  
  - Ecosistema integrat en .NET i Visual Studio.  
  - Suport per a *delegates*, *events* i *LINQ*.  
  - Sintaxi semblant a Java, però amb millores modernes (records, pattern matching).  
* **Limitacions**: Dependència del framework .NET i ecosistema Microsoft, encara que existeix *dotnet core* per multiplataforma.

---

## 🟨 JavaScript (Híbrid)

* **Paradigma**: No és un llenguatge purament orientat a objectes, però permet crear classes i herència amb *prototips* o la sintaxi `class`.  
* **Àmbit**: Principalment web — client i servidor (*Node.js*).  
* **Característiques destacades**:  
  - Model basat en *prototips*, no en classes tradicionals.  
  - Asincronia i *event loop* com a base de la seva arquitectura.  
  - Àmplia compatibilitat amb navegadors i frameworks (React, Vue, Angular).  
* **Limitacions**: Gestió de tipus feble i comportament dinàmic que pot dificultar grans projectes.

---

## 🐍 Python (Híbrid)

* **Paradigma**: Multiparadigma — suporta POO, però també estructurat i funcional.  
* **Àmbit**: Científic, IA, backend, automatització i educació.  
* **Característiques destacades**:  
  - Sintaxi senzilla i llegible.  
  - Sistema de tipus dinàmic i duck typing.  
  - Gran comunitat i llibreries (Django, Flask, NumPy).  
  - Herència múltiple i *mixins* com a característica distintiva.  
* **Limitacions**: Rendiment inferior a llenguatges compilats; dependència de la implementació (*GIL* en CPython).

---

## 🐘 PHP (Híbrid)

* **Paradigma**: Originalment procedural, però des de PHP5 suporta POO completa.  
* **Àmbit**: Principalment aplicacions web del costat servidor.  
* **Característiques destacades**:  
  - Suport per a classes, interfícies, *traits* i excepcions.  
  - Integració amb frameworks moderns (Laravel, Symfony).  
  - Interpretat i àmpliament desplegat en servidors web.  
  - Facilitat per combinar HTML i codi dinàmic.  
* **Limitacions**: Històricament criticat per incoherències de disseny i seguretat, encara que les versions modernes ho han millorat.

---

## Comparativa general

| Llenguatge | Tipus | Paradigma | Àmbit principal | Exemple de framework |
|-------------|--------|------------|-----------------|----------------------|
| **Java** | Pur | POO | Multipropòsit | Spring |
| **C#** | Pur | POO | .NET, jocs, web | ASP.NET, Unity |
| **JavaScript** | Híbrid | POO basada en prototips | Web (client/servidor) | Node.js, React |
| **Python** | Híbrid | Multiparadigma | IA, backend, educació | Django, Flask |
| **PHP** | Híbrid | Procedural i POO | Web servidor | Laravel, Symfony |

---

> *“Cada llenguatge és una manera diferent d’expressar els mateixos principis: objectes, missatges i comportament.”*
